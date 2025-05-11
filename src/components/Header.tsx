export default function Header() {
    return (
        <header className="w-full rounded-full bg-brown px-4 h-18 flex items-center justify-between">
            <section className="flex items-center gap-4">
                <a className="flex justify-center items-center cursor-pointer"><i className="fa-solid fa-envelope text-white rounded-full p-4 bg-light-brown"></i></a>
                <a className="flex justify-center items-center cursor-pointer"><i className="fa-solid fa-user text-white rounded-full p-4 bg-light-brown"></i></a>
            </section>

            <p className="text-white font-bold p-4 bg-light-brown rounded-full">Mo</p>

        </header>
    )
}