import { IsString, IsNotEmpty, IsUUID } from  'class-validator'

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsUUID()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsUUID()
    @IsString()
    clientId: string;

   
}