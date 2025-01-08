package de.stuttgart.hft.controller;

import java.util.List;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import de.stuttgart.hft.model.Product;
import de.stuttgart.hft.service.ProductService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.*;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Product API", description = "CRUD operations for products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GET
    @Operation(summary = "Get all products", description = "Returns a list of all products")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @POST
    @Operation(summary = "Create a product", description = "Creates a new product and returns it")
    public Response createProduct(Product product) {
        Product createdProduct = service.createProduct(product);
        return Response.status(Response.Status.CREATED).entity(createdProduct).build();
    }

    @GET
    @Path("/{id}")
    @Operation(summary = "Get product by ID", description = "Returns a product by its ID")
    public Product getProductById(@PathParam("id") Long id) {
        return service.getProductById(id);
    }

    @DELETE
    @Path("/{id}")
    @Operation(summary = "Delete product by ID", description = "Deletes a product by its ID")
    public Response deleteProduct(@PathParam("id") Long id) {
        Product product = service.getProductById(id);
        if (product == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        service.deleteProduct(id);
        return Response.status(Response.Status.NO_CONTENT).build();
    }
}
