import {projectName} from "./index";

describe('Starter project should', () => {
  it('output its name', () => {
    expect(projectName()).toEqual('Kata starter project');
  });

  it('output its type', () => {
    expect(projectType()).toEqual('Scrum');
  });

});