import React from "react";
import NextLink from "next/link";
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  CardMedia,
} from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";
import { API_URL } from "../../utils/urls";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";
import Reviews from "../../components/Reviews";

export default function ProductScreen() {
  const router = useRouter();
  const classes = useStyles();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const res = await axios.get(`${API_URL}/products/${router.query.title}/`);
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.title} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <CardMedia
            component="img"
            image={product.image}
            title={product.title}
          ></CardMedia>
        </Grid>
        <Grid item md={6} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.title}
                <br />
                <small>by {product.author}</small>
              </Typography>
            </ListItem>
            <Tags tags={product.tags} />
            <Rating rating={product.rating} />
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.currency} {product.price}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.itemsInStock > 0 ? "In stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={product.itemsInStock > 0 ? false : true}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Reviews reviews={product.reviews} />
      </Grid>
    </Layout>
  );
}
