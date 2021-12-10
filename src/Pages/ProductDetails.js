import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetails() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(()=>{
    // component yüklendiğinde yapılmasını istediğin işlemi bu kısma yazıyorsun
    let productService = new ProductService()
    productService.getProductName(name).then(result=>setProduct(result.data.data))

    //then() başarılı olursa manasında
  },[]) // [] anlamı state değiştiğinde sayfayı yenile!

  return (
    <div>
      <br />
      Ürün : {name}
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>Cart Details</Card.Header>
          <Card.Description>
         <li>id: <strong>{product.id}</strong></li> 
         <li>productName is : <strong>{product.productName}</strong></li>
         <li>unitPrice is : <strong>{product.unitPrice}</strong></li>
         <li>unitsInStock is : <strong>{product.unitsInStock}</strong></li>
         <li>quantityPerUnit is : <strong>{product.quantityPerUnit}</strong></li>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
