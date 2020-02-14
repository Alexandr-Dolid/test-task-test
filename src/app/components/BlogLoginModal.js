import React from 'react';

class Modal extends React.Component
{
    render() {
        return (
            <div id="modal" tabIndex="-1" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span>×</span></button>
                                <h4 className="modal-title">Login</h4>
                            </div>
                            <div className="modal-body">
                                <p><input type="text" className="form-control" placeholder="Username"/></p>
                                <p><input type="password" className="form-control" placeholder="Password"/></p>
                                <div className="checkbox"><label><input type="checkbox" value="on"/>Remember me</label></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;