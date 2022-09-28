import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,78</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          atque explicabo culpa beatae corporis perspiciatis quam, quasi id eum
          veritatis praesentium hic nemo sit, a aspernatur ea. Aliquam, laborum
          saepe!
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
