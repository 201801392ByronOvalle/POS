import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor (
    @InjectRepository(Category) private readonly categoryRepository : Repository<Category>
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    //Instancia larga vamos dandole cada parametro
    // const category = new Category()
    // category.name = createCategoryDto.name
    // Aqui pasamos category en lugar del createCategoryDto
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find() // find trae todos, findAndCount trae todos y el cotnador de cuantos son, findBy({id: 2}) busqueda tipo where
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOneBy({id})
    if(!category){
      throw new NotFoundException('La Categoria no existe')
    }
    return category
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
