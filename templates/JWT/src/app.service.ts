import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(userId: number): string {
    /*
    Example Mongoose:
    
    const user = await this.userRepository.findOne({
      where: {
        id: userId
      }
    })
    */
    return 'Hello Program!';
  }
}
