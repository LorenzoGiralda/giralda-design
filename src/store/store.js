import { configureStore } from "@reduxjs/toolkit";

import ToggleLight from "./ToggleLight";
import ToggleFilter from "./ToggleFilter";
import ToggleFilterBlog from "./ToggleFilterBlog";
import DatiPortfolio from "./DatiPortfolio";
import DatiBlog from "./DatiBlog";
import DatiPortfolioHome from "./DatiPortfolioHome";
import ActiveNavPortfolio from "./ActiveNavPortfolio";
import DatiBlogHome from "./DatiBlogHome";
import ActiveNavBlog from "./ActiveNavBlog";

export default configureStore({
    reducer: {
    ToggleFilterBlog: ToggleFilterBlog,
    ToggleFilter: ToggleFilter,
    ToggleLight: ToggleLight,
    DatiPortfolio: DatiPortfolio,
    DatiBlog: DatiBlog,
    DatiPortfolioHome: DatiPortfolioHome,
    ActiveNavPortfolio: ActiveNavPortfolio,
    DatiBlogHome:DatiBlogHome,
    ActiveNavBlog: ActiveNavBlog
    },
    });
