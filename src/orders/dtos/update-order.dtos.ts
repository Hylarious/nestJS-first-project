import { IsString, IsNotEmpty } from  'class-validator'

export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    client: string;
    
    @IsNotEmpty()
    @IsString()
    address: string;
}