"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractBnbRpc = void 0;
const util_1 = require("../../../util");
class AbstractBnbRpc {
    sendRpcCall(method, params) {
        const body = {
            id: 1,
            jsonrpc: '2.0',
            method,
            params: params ? util_1.Utils.convertObjCamelToSnake(params) : {},
        };
        return this.post({ body, path: '' });
    }
    status() {
        return this.sendRpcCall('status');
    }
    abciInfo() {
        return this.sendRpcCall('abci_info');
    }
    abciQuery(params) {
        return this.sendRpcCall('abci_query', params);
    }
    block(params) {
        return this.sendRpcCall('block', params);
    }
    blockResult(params) {
        return this.sendRpcCall('block_result', params);
    }
    blockchain(params) {
        return this.sendRpcCall('blockchain', params);
    }
    commit(params) {
        return this.sendRpcCall('commit', params);
    }
    tx(params) {
        return this.sendRpcCall('tx', params);
    }
    broadcastTxAsync(params) {
        return this.sendRpcCall('broadcast_tx_async', params);
    }
    broadcastTxCommit(params) {
        return this.sendRpcCall('broadcast_tx_commit', params);
    }
    broadcastTxSync(params) {
        return this.sendRpcCall('broadcast_tx_sync', params);
    }
    txSearch(params) {
        return this.sendRpcCall('tx_search', params);
    }
    validators(params) {
        return this.sendRpcCall('validators', params);
    }
    unconfirmedTxs(params) {
        return this.sendRpcCall('unconfirmed_txs', params);
    }
    genesis() {
        return this.sendRpcCall('genesis');
    }
    health() {
        return this.sendRpcCall('health');
    }
    netInfo() {
        return this.sendRpcCall('net_info');
    }
    numUnconfirmedTxs() {
        return this.sendRpcCall('num_unconfirmed_txs');
    }
}
exports.AbstractBnbRpc = AbstractBnbRpc;
//# sourceMappingURL=AbstractBnbRpc.js.map