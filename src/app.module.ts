import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest-course'),UsersModule, BooksModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
