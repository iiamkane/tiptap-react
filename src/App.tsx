import { Tiptap } from './components/Tiptap';
import 'antd/dist/antd.css';

function App() {
    return (
        <div style={{ height: '100vh', width: '100vw', background: '#2d2d2d' }}>
            <main style={{ paddingTop: '100px', width: '950px', margin: '0 auto' }}>
                <Tiptap />
            </main>
        </div>
    );
}

export default App;
