import { ButtonLarge } from "~/components/common/button/button";

export default function ContractSec() {
    return (
        <section id="contract-sec" className="w-full  text-white flex flex-col items-center justify-center">

            <div className="text-center py-10 mb-10  space-y-2">
                <h1 className="font-s text-4xl sm:text-6xl font-bold text-g tracking-wider uppercase">
                    GET IN TOUCH
                </h1>
                <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto pt-2">
                    Got a story, tip, or hot take? We’d love to hear it.
                </p>
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full max-w-3xl bg-[#101524] p-6 sm:p-10 border border-slate-800/80 shadow-2xl space-y-5"
            >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-3">
                        <label htmlFor="name" className="block text-sm font-p  font-semibold tracking-wider uppercase">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter name"
                            className="w-full bg-[#080b13] border border-slate-800 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-white  transition-all"
                        />
                    </div>

                    <div className="space-y-3">
                        <label htmlFor="email" className="block text-sm font-p font-semibold tracking-wider uppercase">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="w-full bg-[#080b13] border border-slate-800 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-white transition-all"
                        />
                    </div>
                </div>


                <div className="space-y-3">
                    <label htmlFor="subject" className="block text-sm font-p  font-semibold tracking-wider uppercase">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="Enter subject"
                        className="w-full bg-[#080b13] border border-slate-800 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-white "
                    />
                </div>

                <div className="space-y-3">
                    <label htmlFor="message" className="block text-sm font-p font-semibold tracking-wider uppercase">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Enter message..."
                        className="w-full bg-[#080b13] border border-slate-800 rounded-md px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-white  transition-all resize-none"
                    />
                </div>

                <div className="w-full flex justify-end">
                    <ButtonLarge text={"SEND 🡵"} path={undefined} />
                </div>

            </form>
        </section>
    )
}