package main

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collection *mongo.Collection
var ctx = context.TODO()

type Games struct {
	ID primitive.ObjectID `bson:"_id"`

	Title       string `bson:"Title"`
	Description string `bson:"Description"`
	Count       int32  `bson:"Count"`
	CanVote     int32  `bson:"CanVote"`

	CreatedAt time.Time `bson:"Created_at"`
	UpdatedAt time.Time `bson:"Updated_at"`
}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {
	// Read Config
	godotenv.Load(".env")
	// database
	fmt.Println("Connecting To Database")
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(os.Getenv("MONGODB")))
	CheckError(err)
	CheckError(client.Ping(ctx, nil))
	// collection = client.Database("kpt").Collection("vote")

	// webserver
	fmt.Println("Starting Web Server")
	app := fiber.New(fiber.Config{
		StrictRouting: true,
		ServerHeader:  "Fiber",
		AppName:       "KPT Vote Server",
	})
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("INDEX")
	})
	app.Get("/stats", func(c *fiber.Ctx) error {
		return c.SendString("stats")
	})
	CheckError(app.Listen(os.Getenv("IPPORT")))
}
