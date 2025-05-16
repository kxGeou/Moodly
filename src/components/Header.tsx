export default function Header() {
    return (
        <header className="flex items-center justify-between w-full px-4 h-12 bg-brown rounded-full lg:h-14">
            <section className="flex items-center gap-2 lg:gap-4">
                <a className="flex justify-center items-center cursor-pointer"><i className="fa-solid fa-envelope bg-light-brown text-xs text-white rounded-full p-2 lg:p-4"></i></a>
                <a className="flex justify-center items-center cursor-pointer"><i className="fa-solid fa-user bg-light-brown text-xs text-white rounded-full p-2 lg:p-4"></i></a>
            </section>

            <p className="text-white lg:p-4">Mo</p>
        </header>
    )
}