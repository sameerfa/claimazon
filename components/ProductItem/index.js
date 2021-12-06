import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import NextLink from "next/link";

export default function ProductItem({ product }) {
  return (
    <Grid item md={4} key={product.sku}>
      <Card>
        <NextLink href={`/product/${product.title}`} passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={product.thumbnail}
              title={product.title}
            ></CardMedia>
            <CardContent>
              <Typography>{product.title}</Typography>
              <small>by {product.author}</small>
            </CardContent>
          </CardActionArea>
        </NextLink>
        <CardActions>
          <Typography>
            {product.currency} {product.price}
          </Typography>
          <Button size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
