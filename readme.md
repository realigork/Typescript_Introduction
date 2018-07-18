# Typescript Introduction

Typescript is kind of a wrapper around JS that provides new features such as
generics, interfaces, types, etc and is compiled down to javascript.

In Typescript declaring a variable with a value will automatically assign type
to it, so that you can no longer reassign a value of a different type to that
variable. If you don't declare a variable, then typescript will assign
type `any`.

If you declare your variable with a value of `null` initially, then it will
become of type `null` and you won't be able to change the value.