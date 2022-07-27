// We can export & import types just like components.

// Covention is to name this file as `Person.types.ts` ig
export type Personprops = {
    name : {
        first : String,
        last : string    // Capital/Small S can be used.
    } 
}

// Also, it is possible to reuse types: extract types & use them to make new types.

export type Name = {
    first : String
    last : string
}

export type Personprops1 = {
    name : Name
}
