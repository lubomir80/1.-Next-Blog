import CardList from "./components/CardList";
import CategoryList from "./components/Category/CategoryList";
import Featured from "./components/Featured";
import Menu from "./components/Menu/Menu";



export default function Home() {
   return (
      <div>
         <Featured />
         <CategoryList />
         <div className="flex gap-12">
            <CardList />
            <Menu />
         </div>
      </div>
   )
}
