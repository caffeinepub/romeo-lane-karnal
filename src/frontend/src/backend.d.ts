import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    id: bigint;
    date: string;
    name: string;
    specialRequests: string;
    time: string;
    phone: string;
    guests: bigint;
}
export interface ContactMessage {
    id: bigint;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    addContactMessage(name: string, email: string, message: string): Promise<bigint>;
    addReservation(date: string, time: string, guests: bigint, name: string, phone: string, specialRequests: string): Promise<bigint>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllReservations(): Promise<Array<Reservation>>;
}
