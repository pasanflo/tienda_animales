import { Injectable, Inject } from "@nestjs/common";
import { IDog } from "src/dogs/interfaces/i-dog.interface";
import { Model } from "mongoose";
import { CreateDogDTO } from "src/dogs/dto/create-dog-dto";
import { UpdateDogDTO } from "src/dogs/dto/update-dog-dto";
import { IReturn } from "src/dogs/interfaces/i-return.interface";

@Injectable()
export class DogService {
  constructor(
    @Inject("DOG_MODEL")
    private readonly dogModel: Model<IDog>
  ) {}

  async create(createDogDTO: CreateDogDTO): Promise<IReturn> {
    const exist = await this.dogModel.exists({ name: createDogDTO.name });
    const myPromise = new Promise<IReturn>((resolve) => {
      if (!exist) {
        new this.dogModel(createDogDTO).save().then((data) => {
          resolve({
            msg: "Perro creado",
            status: 200,
            data: data,
            code: "OK",
          });
        });
      } else {
        resolve({
          msg: "El nombre del perro ya existe",
          status: 400,
          data: undefined,
          code: "KO",
        });
      }
    });
    return myPromise;
  }

  async findAll(): Promise<IReturn> {
    const myPromise = new Promise<IReturn>((resolve) => {
      this.dogModel
        .find()
        .exec()
        .then((data) => {
          resolve({
            msg: "Success",
            status: 200,
            data: data,
            code: "OK",
          });
        });
    });
    return myPromise;
  }

  async delete(id: string): Promise<IReturn> {
    const exist = await this.dogModel.exists({ _id: id });
    const myPromise = new Promise<IReturn>((resolve) => {
      if (!exist) {
        resolve({
          msg: `Error: The specified identifier ${id} doesn't exists.`,
          status: 400,
          data: undefined,
          code: "KO",
        });
      } else {
        this.dogModel.deleteOne({ _id: id }).exec();
        resolve({
          msg: `Success: Dog with given identifier was deleted succesfully.`,
          status: 200,
          data: id,
          code: "OK",
        });
      }
    });
    return myPromise;
  }

  async update(dog: UpdateDogDTO): Promise<IReturn> {
    if (dog._id === undefined || dog._id === "" || dog._id.trim() === "") {
      return new Promise<IReturn>((resolve) => {
        resolve({
          msg: "Error: Invalid request. Please provide dog id.",
          status: 400,
          data: undefined,
          code: "KO",
        });
      });
    }
    const exist = await this.dogModel.exists({ _id: dog._id });
    const myPromise = new Promise<IReturn>((resolve) => {
      if (!exist) {
        resolve({
          msg: `Error: It doesn't exists any dog with id ${dog._id}.`,
          status: 404,
          data: undefined,
          code: "KO",
        });
      } else {
        this.dogModel
          .findOneAndUpdate({ _id: dog._id }, dog, {
            new: true,
          })
          .exec();
        resolve({
          msg: `Success: Updated dog with id ${dog._id}.`,
          status: 200,
          data: dog,
          code: "OK",
        });
      }
    });
    return myPromise;
  }
}
