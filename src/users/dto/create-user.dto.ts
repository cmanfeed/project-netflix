import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'O Nome do usuário deve ser uma String!' })
  @MinLength(4, { message: 'O tamanho do nome do usuário deve ser maior que 4!' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Informe um endereço de email válido!' })
  @IsString()
  email: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma senha válida!' })
  password: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma confirmação de senha válida!' })
  passwordConfirmation: string;
}
