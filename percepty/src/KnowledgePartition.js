import 'bootstrap/dist/css/bootstrap.min.css';
import colors from "./constants";
import './App.css';
import LatexSnippet from "./LatexSnippet";



function KnowledgePartition({ children }) {
    return (
      <div>
        <div class="container" style={{ backgroundColor: colors.silver, padding: '20px', borderRadius: '8px', marginTop: '10px'}}>
            {children}
            
            {/* Arrow */}
            <div class="arrow" style={{ textAlign: 'center', fontSize: '24px', marginTop: '5px' }}>
                &#x25BC;
            </div>
        </div>
      </div>
    );
  }
  
  export default KnowledgePartition;
  