function pickBgColor(name) {
   const lowerName = name && name.toLowerCase()

   let bgColor = ""
   switch (lowerName) {
      case "style":
         bgColor = "bg-blue-200"
         break;
      case "culture":
         bgColor = "bg-red-200"
         break;
      case "travel":
         bgColor = "bg-orange-200"
         break;
      case "coding":
         bgColor = "bg-amber-200"
         break;
      case "food":
         bgColor = "bg-lime-200"
         break;
      case "fashion":
         bgColor = "bg-green-200"
         break;
      default:
         bgColor
   }
   return bgColor
}

export default pickBgColor