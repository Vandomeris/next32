export async function POST(request) {
    const result = await request.json()
    if (result) {
        return Response.json({
            result: "ok"
        })
    } else {
        return Response.json({
            result: "not ok"
        })
    }

}

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    let result = searchParams.get('data')
    if (result) {
        return Response.json({
            result: "ok"
        })
    } else {
        return Response.json({
            result: "not ok"
        })
    }

}