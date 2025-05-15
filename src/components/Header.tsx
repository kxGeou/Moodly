export default function Header() {
    return (
        <header className="w-full rounded-full bg-brown px-4 h-12 flex items-center justify-between">
            <section className="flex items-center gap-2">
                <a className="flex justify-center items-center cursor-pointer"><i className="fa-solid fa-envelope text-white rounded-full p-2 bg-light-brown text-xs"></i></a>
                <a className="flex justify-center items-center cursor-pointer"><i className="fa-solid fa-user text-white rounded-full p-2 bg-light-brown text-xs"></i></a>
            </section>

            <p className="text-white">Mo</p>

        </header>
    )
}