import { IsNotEmpty, IsString, Min } from "class-validator";

export class CreateAuthorDto {

    @IsString()
    @IsNotEmpty()
    firstName: string;


    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    nationality: string;

}
