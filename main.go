package main

import (
	"fmt"

	"github.com/valyala/fasthttp"
)

func main() {
	fmt.Println("Starting...")
	err := fasthttp.ListenAndServe(":8081", fasthttp.CompressHandler(func(ctx *fasthttp.RequestCtx) {
		switch string(ctx.Path()) {
		case "/":
			fmt.Fprintf(ctx, "INDEX")
		case "/stats":
			APIstats(ctx)
		default:
			ctx.SetStatusCode(404)
			fmt.Fprintf(ctx, "NOT FOUND")
		}
	}))
	if err != nil {
		panic(err)
	}
}

func APIstats(ctx *fasthttp.RequestCtx) {
	fmt.Fprintf(ctx, "Hello, world!\n\n")
	// ctx.SetContentType("text/plain;charset=utf8")
	fmt.Fprintf(ctx, "Request method is %q\n", ctx.Method())
	fmt.Fprintf(ctx, "RequestURI is %q\n", ctx.RequestURI())
	fmt.Fprintf(ctx, "Requested path is %q\n", ctx.Path())
	fmt.Fprintf(ctx, "Host is %q\n", ctx.Host())
	fmt.Fprintf(ctx, "Query string is %q\n", ctx.QueryArgs())
	fmt.Fprintf(ctx, "User-Agent is %q\n", ctx.UserAgent())
	fmt.Fprintf(ctx, "Connection has been established at %s\n", ctx.ConnTime())
	fmt.Fprintf(ctx, "Request has been started at %s\n", ctx.Time())
	fmt.Fprintf(ctx, "Serial request number for the current connection is %d\n", ctx.ConnRequestNum())
	fmt.Fprintf(ctx, "Your ip is %q\n\n", ctx.RemoteIP())

}
