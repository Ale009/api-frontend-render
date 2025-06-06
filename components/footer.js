class MyFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =  /*html*/`
            <footer class='page-footer green darken-4 lighten-1'>
                <div class='container'>
                    <div class='row'>
                        <div class='col l6 s12'>
                            <h5 class='white-text'>MyPinterest</h5>
                            <p class='grey-text text-lighten-4'>Hecho con Flask y Materialize</p>
                        </div>
                        <div class='col l4 offset-l2 s12'>
                            <h5 class='white-text'>Enlaces</h5>
                            <ul>
                                <li>
                                    <a class='grey-text text-lighten-3' href='index.html'>
                                        Galería
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class='footer-copyright'>
                    <div class='container'>
                        @ 2025 MyPinterest
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);