/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
      GraphQLModule.forRoot({
    debug: true, 
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  })
],
})
export class AppModule {}
