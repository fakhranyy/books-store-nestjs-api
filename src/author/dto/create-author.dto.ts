import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateAuthorDto {

    @IsString()
    @IsNotEmpty()
    @Length(3,10)
    firstName: string;


    @IsString()
    @IsNotEmpty()
    @Length(3,10)
    lastName: string;

    @IsString()
    @IsNotEmpty()
    nationality: string;

}
