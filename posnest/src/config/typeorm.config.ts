import { ConfigService } from '@nestjs/config'
import {  TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const typeOrmConfig = (configService : ConfigService) : TypeOrmModuleOptions   => ({
    type: 'mssql',
    host: configService.get('DATABASE_HOST'),
    //port: +configService.get('DATABASE_PORT'), //Para SQL Server parsear a numero con + ya que siempre envia como string
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASS'),
    database: configService.get('DATABASE_NAME'),
    options: {
        trustServerCertificate: true,
    },
    logging: true,
    entities: [join(__dirname + '../../**/*.entity.{js,ts}')],
    synchronize: true
})