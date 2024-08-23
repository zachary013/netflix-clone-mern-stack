import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';

const HomePage = () => {
  const user = false;
  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  )
}

export default HomePage