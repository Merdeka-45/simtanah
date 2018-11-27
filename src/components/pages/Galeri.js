import React, { Component } from 'react';
// import Header2 from './../Header2';
import Header3 from './../Header3';
class Galeri extends Component {
  render() {
    return (
        <React.Fragment>
            <Header3/>
            <div className="row justify-content-center simtanah-page-content">
                <div className="col-md-10">
                    <h1 className="display-4">Page Galeri</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae facere sint expedita repellat vero, aspernatur non ratione doloribus aperiam magni soluta id, animi saepe laborum quasi deleniti dolorem voluptatem dignissimos.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
  }
}

export default Galeri;