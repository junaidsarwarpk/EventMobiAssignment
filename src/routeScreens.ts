import { lazy } from 'react';

const MainLayout = lazy(() => import('./layouts/main/MainLayout'));
const SearchScreen = lazy(() => import("./modules/search/screens/SearchScreen/SearchScreen"));




export {
    MainLayout,
    SearchScreen
}