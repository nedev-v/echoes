import { Tabs, TabsContent, TabsList, TabsTriggerClean } from "../../components/ui/tabs";
import { SECONDARY_COLOR_RGB } from "../../const";

export function Feed(){
    return(
        <Tabs defaultValue="recent" className="flex">
            <TabsList className="flex justify-between w-full gap-8 self-center bg-transparent">
                <TabsTriggerClean value="recent" >Following</TabsTriggerClean>
                <TabsTriggerClean value="feed" >Voice Feed</TabsTriggerClean>
            </TabsList>

            {/* Tab 1 Content */}
            <TabsContent value="recent">
                <div className="space-y-4 mt-4">
                    Hallos
                </div>
            </TabsContent>

            {/* Tab 2 Content */}
            <TabsContent value="feed">
                <div className="space-y-4 mt-4">
                    Clean Code
                </div>
            </TabsContent>
        </Tabs>
    )
}