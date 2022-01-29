export default interface Player {
    name: string,
    lastName: string,
    wishes: Array<string>
}

export interface PlayerDB extends Player {
    id: string
}
