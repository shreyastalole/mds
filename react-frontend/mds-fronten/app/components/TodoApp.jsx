"use client";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'


import './TodoApp.css'


// function AuthenticatedRoute({children}) {
//     const authContext = useAuth()
    
//     if(authContext.isAuthenticated)
//         return children

//     return <Navigate to="/" />
// }

export default function TodoApp() {
    return (
        <div className="TodoApp">
            {/* <AuthProvider> */}
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={ <WelcomeComponent /> } />
                        <Route path='/welcome' element={ <WelcomeComponent /> } />
                        
                        {/* <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute> 
                        } /> */}
                        
                        <Route path='/products' element={<ListTodosComponent /> } />
                        <Route path='/products/:id' element={<TodoComponent /> } />
                        {/* <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent /> 
                            </AuthenticatedRoute>
                        } /> */}

                        {/* <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent /> 
                            </AuthenticatedRoute>
                        } /> */}
  

                        {/* <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent /> 
                            </AuthenticatedRoute>
                        } /> */}
                        
                        <Route path='*' element={<ErrorComponent /> } />

                    </Routes>
                </BrowserRouter>
            {/* </AuthProvider> */}
        </div>
    )
}












