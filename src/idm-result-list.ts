export class ResultList{
    search_result: any;
    tagid: string;
    tableid: string;

    constructor(tagid: string, data: any){
        this.tagid = tagid;
        this.search_result = data;
        this.tableid = "";
        const queryValue = this.generateTagID(tagid);
        const container = document.querySelector(queryValue)!;
        const el = document.createElement('div');
        if(data){
            if(data.length == 0){
                el.innerHTML = `
                    <h2 class="warning-msg">Not Found!</h2>
                `;
                container?.appendChild(el);
            }else{
                const tableHeaders = ["Name", "Phone", "Email", "Note"] ;
                this.createResultListTable(container, tableHeaders);
                data.forEach((result: any, index: number) => {
                    this.appendResult(result, index);
                })
            }
        }else{
            this.removeResultListTable(container);
        }
        
    }
    generateTagID (tagid: string){
        return '#'+tagid;
    }
    removeResultListTable(container: any){
        if(container.firstChild)
            container.removeChild(container.firstChild);
    }
    createResultListTable (container: any, tableHeaders: string[]){
        if(container.firstChild) container.removeChild(container.firstChild);
        let containerTable = document.createElement('table');
        containerTable.id = "result-list-table";
        this.tableid = this.generateTagID(containerTable.id)
        let containerTableHead = document.createElement('thead');
        containerTableHead.id = 'result-list-table-head'
        let containerTablerTableHeaderRow = document.createElement('tr');
        containerTablerTableHeaderRow.id = 'result-list-table-tr';
        tableHeaders.forEach(header => {
            let tableHeader = document.createElement('th');
            tableHeader.innerText = header;
            containerTablerTableHeaderRow.append(tableHeader);
        })
        containerTableHead.append(containerTablerTableHeaderRow);
        containerTable.append(containerTableHead);
        let containerTableBody = document.createElement('tbody');
        containerTableBody.id = "result-list-table-body";
        containerTable.append(containerTableBody);
        container.append(containerTable);
        //return container;
    }

    appendResult(result: any, resultIndex: number){
        const resultTable = document.querySelector(this.tableid);
        let resultTableBodyRow = document.createElement('tr');
        resultTableBodyRow.id = 'result-table-body-row-' + resultIndex;

        let name = document.createElement('td');
        name.innerText = result.firstName + ' ' + result.lastName;

        let phone = document.createElement('td');
        phone.innerText = result.phone;

        let email = document.createElement('td');
        email.innerText = result.email;

        let note = document.createElement('td');
        note.innerText = result.note;

        resultTableBodyRow.append(name, phone, email, note);
        resultTable?.append(resultTableBodyRow);

        //add event listener to each row in table
        const resultRecordRowElement = document.querySelector(this.generateTagID(resultTableBodyRow.id)) as HTMLTableRowElement;
        resultRecordRowElement.addEventListener('click', (e: Event) => {
            e.preventDefault();
            //popup details
            console.log("popup details");
            const clickRecordRow = new CustomEvent('clickRecordRow', {detail: result});
            window.dispatchEvent(clickRecordRow);
        })

    }

}