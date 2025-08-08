import { IsNotEmpty } from 'class-validator'

export class CreateCategoryDto {
    @IsNotEmpty({message: 'El Nombre de la Categoría no puede ir vacío'}) //En el decorador @Decorador se usa ya fecta a la sig. linea de codigo
    name: string
}