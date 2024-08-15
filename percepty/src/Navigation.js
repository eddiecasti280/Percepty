import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import colors from './constants'

function Navigation(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: colors.taupe_gray, paddingLeft: '10px' }}>
            <a class="navbar-brand" href="#">Percepty</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mathematics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Programming</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Linguistics</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;