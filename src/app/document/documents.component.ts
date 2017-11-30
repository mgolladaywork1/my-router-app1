import { Component } from '@angular/core';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment,
  PRIMARY_OUTLET
 } from '@angular/router';

@Component({
  selector: 'my-rapp-document',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent{
  tree1: UrlTree;
  fragment1: string;
  queryParams1: object;
  url1SegmentGroup: UrlSegmentGroup;
  url1Segment : UrlSegment[];
  url1ChildrenPrimarySegment : UrlSegment[];
  url1ChildrenSecondarySegment : UrlSegment[];
  url1ChildrenThirdSegment: UrlSegment[];

  constructor(router: Router) {
    //const tree: UrlTree =
    //  router.parseUrl('/team/33/(user/miu//support:help)?debug=true#DocumentsModule');
    const tree: UrlTree =
      router.parseUrl('/team;a=v1/33;b1=v1;b2=v2/(user/miu//support:help//chatarea:chat//group:developer)?debug=true&watch=true#DocumentsModule');


      const f = tree.fragment;
    const q = tree.queryParams;
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    g.children[PRIMARY_OUTLET].segments;
    g.children['support'].segments;
    
    console.log(`tree ${tree}`);
    console.log(`fragnebt ${f}`);
    console.log(`query params: ${JSON.stringify(q)}`);
    console.log(`UrlSegmentGroup: ${g}`);
    console.log(`UrlSeqment: ${s}`);
    console.log(`Chrildren PRIMARY-Seqment: ${g.children[PRIMARY_OUTLET].segments}`);
    console.log(`Children Secondary-Seqment: ${g.children['support']}`);
    
    this.tree1 = tree;
    this.fragment1 = f;
    this.queryParams1 = q;
    this.url1SegmentGroup = g;
    this.url1Segment = s;
    this.url1ChildrenPrimarySegment = g.children[PRIMARY_OUTLET].segments;
    this.url1ChildrenSecondarySegment = g.children["support"].segments;
    this.url1ChildrenThirdSegment = g.children["chatarea"].segments;
  }
}