// This file was generated by RedwoodJS
import '@redwoodjs/router'

type ParamType<constraint> = constraint extends "Int" ? number : constraint extends "Boolean" ? boolean : constraint extends "Float" ? number : string;
type RouteParams<Route> = Route extends `${string}/{${infer Param}:${infer Constraint}}/${infer Rest}` ? { [Entry in Param]: ParamType<Constraint> } & RouteParams<`/${Rest}`> : Route extends `${string}/{${infer Param}:${infer Constraint}}` ? { [Entry in Param]: ParamType<Constraint> } : Route extends `${string}/{${infer Param}}/${infer Rest}` ? { [Entry in Param]: string } & RouteParams<`/${Rest}`> : {}
type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    newPost: (params?: RouteParams<"/posts/new"> & QueryParams) => "/posts/new"
    editPost: (params?: RouteParams<"/posts/{id:Int}/edit"> & QueryParams) => "/posts/{id:Int}/edit"
    post: (params?: RouteParams<"/posts/{id:Int}"> & QueryParams) => "/posts/{id:Int}"
    posts: (params?: RouteParams<"/posts"> & QueryParams) => "/posts"
    blogPost: (params?: RouteParams<"/blog-post/{id:Int}"> & QueryParams) => "/blog-post/{id:Int}"
    about: (params?: RouteParams<"/about"> & QueryParams) => "/about"
    home: (params?: RouteParams<"/"> & QueryParams) => "/"
  }
}
