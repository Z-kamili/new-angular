import { Product } from "./Product";


export class ProductService {

    public getAllProducts() {

        let products: Product[];

        products = [

            new Product(1,'Banana',30000),
            new Product(2,'Orange',30000),
            new Product(3,'Tomatos',30000),
            new Product(4,'Apple',30000),
            new Product(5,'Onion',30000),

        ];


        return products;

    }

}