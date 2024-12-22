import {db} from "@/utils";
import exp from "constants";
import { eq, and } from "drizzle-orm";

import { NextResponse } from "next/server";
export async function GET(req) {
    const searchParams=req.nextUrl.searchParams;
    const batch=searchParams.get('batch');
    const month=searchParams.get('month');
    const result =await db.select({
        name:students.name,
        present:attendance.present,
        date:attendance.date,
        batch:students.batch,
        id:attendance.id

    }).from(students)
    .leftJoin(attendance,and(eq(students.id,attendance.id),eq(attendance.date,month)))
    .where(eq(students.batch,batch))
    .where(eq(attendance.date,month))
    return NextResponse.json(result)
}
export async function POST(req) {
    const data =await req.json();
    const result=await db.insert(attendance)
    .values({
        id:data.id,
        present:data.present,
        date:data.date
    });
    return NextResponse.json({ success: true, result });
}
export async function DELETE(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const date = searchParams.get('date');

    const result = await db.delete(attendance)
        .where(
            and(
                eq(attendance.id, id),
                eq(attendance.date, date)
            )
        );

    return NextResponse.json(result);
}