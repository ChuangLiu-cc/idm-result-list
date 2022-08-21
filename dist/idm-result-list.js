export class ResultList {
    constructor(tagid, data) {
        this.tagid = tagid;
        this.search_result = data;
        this.tableid = "";
        const queryValue = this.generateTagID(tagid);
        const container = document.querySelector(queryValue);
        const el = document.createElement('div');
        if (data) {
            if (data.length == 0) {
                el.innerHTML = `
                    <h2 class="warning-msg">Not Found!</h2>
                `;
                container === null || container === void 0 ? void 0 : container.appendChild(el);
            }
            else {
                const tableHeaders = ["Name", "Phone", "Email", "Note"];
                this.createResultListTable(container, tableHeaders);
                data.forEach((result, index) => {
                    this.appendResult(result, index);
                });
            }
        }
        else {
            this.removeResultListTable(container);
        }
    }
    generateTagID(tagid) {
        return '#' + tagid;
    }
    removeResultListTable(container) {
        if (container.firstChild)
            container.removeChild(container.firstChild);
    }
    createResultListTable(container, tableHeaders) {
        if (container.firstChild)
            container.removeChild(container.firstChild);
        let containerTable = document.createElement('table');
        containerTable.id = "result-list-table";
        this.tableid = this.generateTagID(containerTable.id);
        let containerTableHead = document.createElement('thead');
        containerTableHead.id = 'result-list-table-head';
        let containerTablerTableHeaderRow = document.createElement('tr');
        containerTablerTableHeaderRow.id = 'result-list-table-tr';
        tableHeaders.forEach(header => {
            let tableHeader = document.createElement('th');
            tableHeader.innerText = header;
            containerTablerTableHeaderRow.append(tableHeader);
        });
        containerTableHead.append(containerTablerTableHeaderRow);
        containerTable.append(containerTableHead);
        let containerTableBody = document.createElement('tbody');
        containerTableBody.id = "result-list-table-body";
        containerTable.append(containerTableBody);
        container.append(containerTable);
        //return container;
    }
    appendResult(result, resultIndex) {
        const resultTable = document.querySelector(this.tableid);
        let resultTableBodyRow = document.createElement('tr');
        resultTableBodyRow.id = 'result-table-body-row';
        let name = document.createElement('td');
        name.innerText = result.firstName + ' ' + result.lastName;
        let phone = document.createElement('td');
        phone.innerText = result.phone;
        let email = document.createElement('td');
        email.innerText = result.email;
        let note = document.createElement('td');
        note.innerText = result.note;
        resultTableBodyRow.append(name, phone, email, note);
        resultTable === null || resultTable === void 0 ? void 0 : resultTable.append(resultTableBodyRow);
    }
}
//# sourceMappingURL=idm-result-list.js.map