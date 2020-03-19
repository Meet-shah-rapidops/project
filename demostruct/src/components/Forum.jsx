import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EuiCard, EuiIcon, EuiAvatar } from "@elastic/eui";

export class Forums extends Component {
  render() {
    return (
      <div>
        <h2>Can someone help me? I need a design advice</h2>
        <p>
          posted by <Link to="/">Jennifer Hudson</Link> | 5 minutes ago
        </p>

        <div>
          <EuiAvatar size="s" name="Raphael" />
          <EuiCard
            icon={<EuiIcon size="xxl" />}
            title="Hi"
            description="dsdbsbvslbsk"
            // onClick={}
          />
        </div>
      </div>
    );
  }
}

export default Forums;
