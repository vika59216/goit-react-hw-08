
import { useEffect, lazy } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";
import "./App.css";


const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

 const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
     <>
      <Layout>
        {isRefreshing ? (
          <b>Refreshing user...</b>
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute>
                    <RegistrationPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute>
                    <LoginPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </>
  );
}



/*import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
//import { selectError, selectIsLoading } from "./redux/contactsSlice";
//import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchBox  />
      <ContactList  />
    </div>
  );
}*/

export default App;