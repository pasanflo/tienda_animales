import { Controller, Post, Body, Delete, Get, Param } from "@nestjs/common";
import { DogService } from "src/dogs/services/dog/dog.service";
import { UpdateDogDTO } from "src/dogs/dto/update-dog-dto";
import { CreateDogDTO } from "src/dogs/dto/create-dog-dto";
@Controller("api/v0/dog") //Directorio principal
export class DogController {
  /***************************************************************
   * @param CogService
   * @returns
   ************/
  constructor(private dogsService: DogService) {}
  /***************************************************************
   * @param CreateDogDTO
   * @returns create()
   ************/
  @Post("create")
  dogCreate(@Body() dogDetails: CreateDogDTO) {
    return this.dogsService.create(dogDetails).then((r) => {
      return r;
    });
  }
  /***************************************************************
   * @param
   * @returns findAll()
   ************/
  @Get("readAll")
  readAll() {
    return this.dogsService.findAll();
  }
  /***************************************************************
   * @param id
   * @returns delete()
   ************/
  @Delete("delete/:id")
  deleteCat(@Param("id") id: string) {
    return this.dogsService.delete(id).then((r) => {
      return r;
    });
  }
  /***************************************************************
   * @param UpdateCatDTO
   * @returns update()
   ************/
  @Post("update")
  updateDog(@Body() dogData: UpdateDogDTO) {
    return this.dogsService.update(dogData).then((r) => {
      return r;
    });
  }
}
