import Layout from "@/components/layout"

export default function Order(){
  return(
    <Layout>
      <div className="flex flex-col">
      <h1 className="self-center text-7xl bg-yellow-700 bg-opacity-30 mb-10 p-2">Purchase a custom instrument</h1>
      </div>
      <section className="flex flex-col">
      <h2 className="flex self-center rounded-lg ring-2 ring-green-500 p-5 ml-14 text-center text-2xl bg-green-700 bg-opacity-20">While the ordering system is currently being built- please reach out via e-mail (ericwood208@gmail.com) or instagram (@ericwoodguitars) for more information about purchasing an instrument.</h2>
      </section>
    </Layout>
  )
}