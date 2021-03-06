// This file was generated by RedwoodJS
import '@redwoodjs/router'

type ParamType<constraint> = constraint extends "Int" ? number : constraint extends "Boolean" ? boolean : constraint extends "Float" ? number : string;
type RouteParams<Route> = Route extends `${string}/{${infer Param}:${infer Constraint}}/${infer Rest}` ? { [Entry in Param]: ParamType<Constraint> } & RouteParams<`/${Rest}`> : Route extends `${string}/{${infer Param}:${infer Constraint}}` ? { [Entry in Param]: ParamType<Constraint> } : Route extends `${string}/{${infer Param}}/${infer Rest}` ? { [Entry in Param]: string } & RouteParams<`/${Rest}`> : {}
type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    newPost: (params?: RouteParams<"/admin/posts/new"> & QueryParams) => "/admin/posts/new"
    editPost: (params?: RouteParams<"/admin/posts/{id:Int}/edit"> & QueryParams) => "/admin/posts/{id:Int}/edit"
    post: (params?: RouteParams<"/admin/posts/{id:Int}"> & QueryParams) => "/admin/posts/{id:Int}"
    posts: (params?: RouteParams<"/admin/posts"> & QueryParams) => "/admin/posts"
    blogPost: (params?: RouteParams<"/blog-post/{id:Int}"> & QueryParams) => "/blog-post/{id:Int}"
    about: (params?: RouteParams<"/about"> & QueryParams) => "/about"
    contact: (params?: RouteParams<"/contact"> & QueryParams) => "/contact"
    home: (params?: RouteParams<"/"> & QueryParams) => "/"
  }
}
